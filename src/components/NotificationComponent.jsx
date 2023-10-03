function NotificationComponent({content, type}) {
    return <button className={"button " + (type)}>{content}</button>
}

export default NotificationComponent;