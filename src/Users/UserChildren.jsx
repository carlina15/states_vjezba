export default function UserChildren ({name, age, children}) {
    return(
        <>
        <p>Pozdrav, moje ime je {name} i imam {age} godina.</p>
        {children}
        </>
    )
}