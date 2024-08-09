
import './App.css';
import ButtonClick from './components/ButtonClick';
import ShoppingList from './components/ShoppingList';
import InputChange from './components/InputChange';
import MyButton from './components/MyButton';
import TextInput from './components/TextInput';
import ToggleVisibility from './components/ToggleVisibility';
import RegistrationForm from './components/RegistrationForm';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
     <>
<ShoppingList/>
  <ButtonClick />
<InputChange/>
<MyButton/>
<TextInput/>
<ToggleVisibility />
<RegistrationForm />
<TodoList/>
</>
    </div>
  );
}

export default App;
