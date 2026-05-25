function ClickButton() {
  const handleClick = () => {
    alert("Кнопку натиснуто!");
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ClickButton;
