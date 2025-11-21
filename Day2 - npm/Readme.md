# Parcel

- Dev Build
- Server
- HMR - hot module replacement
- File watching algo written in c++
- Cache - faster build
- img optimization
- Minification
- Bundling
- Compressing 
- Consistent hashing
- Code -splitting
- Differential Bundeling- 
- Diagonostic - beaytiful error
- Error Handling
- HTTOD
- Tree Shaking - remove unused code
- diff dev and prod bundles

commands - 
`npm i -D parcel` -> istalls parcel as dev dependence
`npm install` installs all dependency from package.json and package.lock.json
`npx parcel index.html` is a command that starts Parcel, a zero-config web bundler, and tells it to use index.html as the entry point of your project
`npx parcel build index.html` 
for production -> compresses,cleans file,Removes unused code (tree-shaking),Optimizes images, Generates hashed filenames (for caching),
Outputs everything into a dist/ folder 