export function substituteValues({template, values}) {
    // Використовуємо регулярний вираз для пошуку фрагментів, які потрібно замінити
    const regex = /\{(\w+)\}/g;

    // Використовуємо метод `replace` для підстановки значень
    const result = template.replace(regex, (match, key) => {
        return values.hasOwnProperty(key) ? values[key] : match;
    });
    return result;
}
