export default function Weather({ json }) {

  return (
    (json.cod != 404) ? 
    <section>
      
      <h1>
        Погода в {json.name}: {json.weather[0].description}
      </h1>
      
      <p>Температура: <strong>{Math.round(json.main.temp)}°C</strong></p>
      <hr />
      <p>Відчувається: <strong>{Math.round(json.main.temp)}°C</strong></p>
      <hr />
      <p>Максимальна Температура: <strong>{Math.round(json.main.temp_max)}°C</strong></p>
      <hr />
      <p>Мінімальна Температура: <strong>{Math.round(json.main.temp_min)}°C</strong></p>
      <hr />
      <p>Вологість: <strong>{Math.round(json.main.humidity)}%</strong></p>
      <hr />
      <p>Тиск: <strong>{Math.round(json.main.pressure)} Н/м²</strong></p>
      <hr />
        <label><strong>Вітер:</strong> </label>
      <ul>
        <li>Швидкість: <strong>{json.wind.speed} М/с</strong></li>
        <li>Напрям: <strong>{json.wind.deg} °</strong></li>
        <li>Порив вітру : <strong>{json.wind.gust} М/с</strong></li>
      </ul>
      
    </section> 
    : <section><h1>Виберіть місто</h1></section>
  );
};
