
const isTrue = (list)=>list.every(item=>!!item)

const Rservice = require('./services/rarity.service')
const Rarity = require('./models/Rarity.model')
const Tservice = require('./services/type.service')
const func = async () => {
    try {
        const allTypes = await Rarity.find().lean()
        for (const type of allTypes) {
            await Tservice.create(type)
        }
        console.log('of')
    } catch (e) {
        console.log('error', e)
    }

}
// func()
module.exports = {isTrue}
function substituteValues({ template, values }) {
    // Використовуємо регулярний вираз для пошуку фрагментів, які потрібно замінити
    const regex = /\{(\w+)\}/g;

    // Використовуємо метод `replace` для підстановки значень
    const result = template.replace(regex, (match, key) => {
        // Якщо значення для ключа існує в об'єкті `values`, то використовуємо його, інакше залишаємо співпадіння незмінним
        return values.hasOwnProperty(key) ? values[key] : match;
    });

    return result;
}

console.log(substituteValues({template:"+{value}% ATTACK to your hero.",values:{value:100}}))
