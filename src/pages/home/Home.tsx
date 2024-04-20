import { useTheme } from "@/hooks/useTheme";
import { removeTest, test } from "@/lib/redux/reducers/cartReducer";
import { RootState } from "@/models/RootState";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { toggleTheme } = useTheme();

  const dispatch: any = useDispatch();

  const handleAddTest = () => {
    const testDispatch = 1;

    dispatch(test({ testDispatch }));
  };
  const handleRemoveTest = () => {
    dispatch(removeTest({}));
  };

  const reduxValue = useSelector((state: RootState) => state.cart.testState);

  const logValue = () => {
    console.log(reduxValue);
  };
  return (
    <>
      <h1>Home</h1>

      <button onClick={toggleTheme}>change Theme</button>
      <button onClick={handleAddTest}>Add Test Redux</button>
      <button onClick={handleRemoveTest}>Remove Test Reduxe</button>
      <button onClick={logValue}>Print in console Redux state value</button>
    </>
  );
}
