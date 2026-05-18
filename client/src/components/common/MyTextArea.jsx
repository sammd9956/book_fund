import { Textarea } from '../ui/textarea'

const MyTextArea = ({style , placeholder,  name, value, onChange}) => {
  return (
    <Textarea placeholder={placeholder} className={style} name={name} value={value} onChange={onChange} />
  )
}

export default MyTextArea;