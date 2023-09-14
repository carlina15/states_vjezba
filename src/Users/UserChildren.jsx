export default function UserChildren ({name, age, children}) {
    return(
        <>
        <p>Pozdra, moje ime je {name} i imam {age} godina.</p>
        {children}
        </>
    )
}