export default function IncorrectCity({ state }) {
  
  return(
    <span id="errorModal" state={`${state}`}>
      Такого миста не існує, або не правильна назва міста
    </span>
  )
};
