exports.cmd_list_processors=cmd_list_processors;

let matcher = require('matcher');
let common = require(__dirname+'/common.js');

function cmd_list_processors(opts, callback) {
  if (!('show_warnings' in opts)) opts.show_warnings=true;
  common.get_processor_specs(opts, function(err, processor_specs) {
    if (err) {
      console.error(err);
      callback();
      return;
    }
    let list=[];
    for (let i in processor_specs) {
      let spec0=processor_specs[i];
      let pname=spec0.name||'';
      if (pname && opts.pattern) {
        if (matcher.isMatch(pname, opts.pattern)) {
list.push(pname);
}
      } else if (pname) {
        list.push(pname);
      }
    }
    list=list.sort();
    if (list.length>0) {
console.info(list.join('\n'));
}
    callback();
  });
}

