import { Textarea } from '../ui/textarea'

const MyTextArea = ({style , placeholder}) => {
  return (
    <Textarea placeholder={placeholder} className={style}/>
  )
}

export default MyTextArea