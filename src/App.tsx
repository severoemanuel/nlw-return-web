import { Widget } from './components/Widget'

interface ButtonProps {
  text?: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className="button">{text ?? 'Default'}</button>
}

export const App: React.FC = () => {
  return <Widget />
}
