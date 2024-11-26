/**
 * Класс для работы с API
 *
 * @author		Efremov
 * @version		1.0
 */
class Api {
  /**
   * @param {object} data - Объект с данными для подстановки.
   * @param {string} template - Строка с плейсхолдерами формата `%key%`.
   * @returns {string} - Шаблон с подставленными значениями.
   */
  get_api_path(data, template) {
    return Object.entries(data).reduce((result, [key, value]) => {
      const placeholder = `%${key}%`;
      return result.replaceAll(placeholder, encodeURIComponent(value));
    }, template);
  }
}

const user = {
  id: 20,
  name: "John Dow",
  role: "QA",
  salary: 100,
};

const apiPathTemplates = [
  "/api/items/%id%/%name%",
  "/api/items/%id%/%role%",
  "/api/items/%id%/%salary%",
];

const api = new Api();

const apiPaths = apiPathTemplates.map((template) =>
  api.get_api_path(user, template)
);

console.log(JSON.stringify(apiPaths));

// Ожидаемый результат
const expectedResult = [
  "/api/items/20/John%20Dow",
  "/api/items/20/QA",
  "/api/items/20/100",
];
