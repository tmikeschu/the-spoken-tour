import raf from "./tempPolyfills"
import "jest-enzyme"
import { configure, shallow, mount } from "enzyme"
import toJson  from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

global.shallow = shallow
global.mount = mount
global.toJson = toJson

