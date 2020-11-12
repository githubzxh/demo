/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
    return reg.test(path);
}

const menuData = [
    {
        name: '学校信息',
        icon: 'dashboard',
        path: 'index'
    },
    {
        name: '个人信息',
        icon: 'C',
        path: 'D',
        children: [
            {
                name: '账号信息',
                path: 'analysis',
            },
            {
                name: '学生信息',
                path: 'monitor',
            }
        ],
    }
];

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
        let {path} = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

export const getMenuData = () => formatter(menuData);
