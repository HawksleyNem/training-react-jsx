// function NotificationComponent({content, type}) {
//     if (content == null) {
//         content = 'Votre message'
//     }
//     const displayCloseBtn = false
//     return <button className={"button " + (type)}>{content}</button>
// }

// function NotificationComponent(children) {
//     const displayCloseBtn = false

//     return (
//         <>
//             {children}
//         </>
//     )
// }

// Correction
function NotificationComponent(props) {
    const {content, type} = props
    console.log(props);
    return (
        <div className={`notification ${type}`}>
            <button className="delete"></button>
            {content}
        </div>
    )
}

export default NotificationComponent;