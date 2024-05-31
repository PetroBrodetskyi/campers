import Location from './Location/Location.jsx';
import FilterTypes from './FilterTypes/FilterTypes.jsx';
import FilterEquipments from './FilterEquipments/FilterEquipments.jsx';
import css from './Sidebar.module.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const Sidebar = () => {
    return (
        <aside className={css.sidebarContainer}>
            <Location />
            <FilterEquipments />
            <FilterTypes />
            <SubmitButton buttonText="Search" />
        </aside>
    );
};

export default Sidebar;
