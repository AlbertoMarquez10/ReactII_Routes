

const HomePage = ({ Cake }) => {
  return (
    <div className="text-center mt-5 vh-100">
        <h1>Bienvenido a Happy Cake</h1>
        <h3>El lugar de los pasteles felices</h3>
        <img src={Cake} className="cssPastel pb-3"/>

    </div>
  )
}

export default HomePage