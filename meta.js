/**
 * package.json元数据
 */

module.exports = {
    
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A End(nodejs 后端项目) project with ziu',
        },
        author: {
            type: 'string',
            message: 'Author',
        }
    }
};