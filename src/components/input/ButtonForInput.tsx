
type ButtonInputProps = {
    name: string
    callBack:() =>void
}

export const ButtonInput = (props: ButtonInputProps) => {

    const onClickHandler = () => {
       props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}