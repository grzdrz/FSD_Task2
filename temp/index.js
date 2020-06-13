import "./index.scss";

require.context('./', true, /\.(png|svg|jpg)$/);


import jQueryTest from 'jquery';
const $ = jQueryTest;
global.jQuery = $;
global.$ = $;

import 'air-datepicker';

/* import "./jquery-rate-picker.js";  */
/* import "./test.js"; */

//dropdown
import { dropdownScript } from "./FormElements.FormInput/Dropdown.js";
dropdownScript();

//dropdown
import { expandableCheckboxListScript } from "./FormElements.CheckboxList/ExpandableCheckboxList.js";
expandableCheckboxListScript();


//pagination
import { paginationScript } from "./FormElements.Pagination/Pagination.js";
paginationScript();


//rangeSlider
import { rangeSliderScript } from "./FormElements.RangeSlider/RangeSlider.js";
rangeSliderScript();


import { setDateInputScript } from "./FormElements.DateInput/DateInput.js";
setDateInputScript();