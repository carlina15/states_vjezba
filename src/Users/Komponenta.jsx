const Komponenta = ({uvecaj}) => {
    return (
        <>
        <button onClick={uvecaj}>Uvecaj za 1 iz kompomente</button>
        <input type="text" onChange={(Event) => {console.log(Event.TARGET.value)} } />
        </>
    )
}