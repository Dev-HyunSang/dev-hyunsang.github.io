// `- 1. foo` / `- > 1. foo`: keep "1." as literal text instead of a nested ordered list.
// Only applies to ordered lists somewhere inside a `-` (unordered) list item.
export default function remarkLiteralNestedOl() {
  return (tree) => walk(tree, false);
}

function walk(node, inBullet) {
  if (!node.children) return;
  const here = inBullet || (node.type === 'list' && !node.ordered);
  node.children = node.children.flatMap((child) => {
    walk(child, here);
    return here && child.type === 'list' && child.ordered ? flatten(child) : [child];
  });
}

function flatten(list) {
  return list.children.flatMap((item, i) => {
    const prefix = { type: 'text', value: `${(list.start ?? 1) + i}. ` };
    const [first, ...rest] = item.children;
    if (first?.type === 'paragraph') {
      first.children.unshift(prefix);
      return [first, ...rest];
    }
    return [{ type: 'paragraph', children: [prefix] }, ...item.children];
  });
}

// Self-check: node src/lib/remark-literal-nested-ol.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  const p = (t) => ({ type: 'paragraph', children: [{ type: 'text', value: t }] });
  const ol = (t) => ({ type: 'list', ordered: true, start: 1, children: [{ type: 'listItem', children: [p(t)] }] });
  const ul = (...c) => ({ type: 'list', ordered: false, children: [{ type: 'listItem', children: c }] });
  const tree = { type: 'root', children: [ol('top'), ul(ol('a'), { type: 'blockquote', children: [ol('b')] })] };
  remarkLiteralNestedOl()(tree);
  const item = tree.children[1].children[0].children;
  console.assert(tree.children[0].type === 'list', 'top-level ol kept');
  console.assert(item[0].type === 'paragraph' && item[0].children[0].value === '1. ', 'ol in bullet flattened');
  console.assert(item[1].children[0].type === 'paragraph', 'ol in blockquote in bullet flattened');
  console.log('ok');
}
