let mounter = null;
if (typeof window !== 'undefined') {
  // now we are in the server
  mounter = require('./client').mounter;
} else {
  mounter = require('./server').mounter;
}

export function mount(layoutClass, regions, options = {}, context = null ) {
  options.rootId = options.rootId || 'react-root';
  options.rootProps = options.rootProps || {};
  mounter(layoutClass, regions, options, context );
}

export function withOptions(options, fn) {
  return function (...args) {
    const newArgs = [ ...args, options ];
    return fn(...newArgs);
  }
}
