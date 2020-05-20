const user = {
    name: '<script>'
}

const result = `<h2>${user.name}</h2>`

const vm = require('vm')

const templateMap = {
    templateA: '`<h2>${include("templateB")}</h2>`',
    templateB: '`<p>hahahahhaha</p>`'
}

const context = {
    include: function (name) {
        return templateMap[name]()
    },
    _: function (markup) {
        if (!markup) return ''
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
    }
}

Object.keys(templateMap).forEach(key => {
    const temp = templateMap[key]
    templateMap[key] = vm.runInNewContext(`
    (function () {
        return ${temp}
    });
    `, context)
})

console.log(templateMap['templateA']())

console.log(vm.runInNewContext('`<h2>${_(user.name)}</h2>`', {
    user,
    _: function (markup) {
        if (!markup) return ''
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;')
    }
}))

// templateMap['templateB'] 后面加  () 表示立即执行该函数
// 两种立即执行的写法
// console.log((templateMap['templateB'])())
// console.log(templateMap['templateB']())



// const template = '<h2><%= user.name %></h2>'
// // ejs npm 常用模板字符串包
// ejs.render(template, user)