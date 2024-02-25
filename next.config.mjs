// next.config.mjs
import nextMDX from '@next/mdx';

const withMDX = nextMDX({
  extension: /\.mdx?$/
});

export default withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
});
