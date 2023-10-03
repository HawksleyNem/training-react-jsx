function WrapperComponent({children}) {
      return(
        <>
            <div className="box">
                <p>Mes alertes</p>
                {children}
            </div>
        </>
      )
}

export default WrapperComponent;