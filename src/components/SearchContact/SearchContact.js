import { setFilter } from "components/Redux/filterSlice";
import { useDispatch } from "react-redux"
import { Input, Label } from "./SearchContact.styled"


export const SearchContact = () => {

  const dispatch = useDispatch();

  return (
    <Label htmlFor="">
      Find contacts by name
      <Input
        onChange={(evnt) => {
          console.log(evnt.target.value)
          dispatch(setFilter(evnt.target.value))}}
        type="text" 
      />
    </Label>
  )
}