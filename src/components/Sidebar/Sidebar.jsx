import Location from './Location/Location.jsx';
import FilterTypesGroup from './FilterTypes/FilterTypes.jsx';
import FilterEquipments from './FilterEquipments/FilterEquipments.jsx';
import css from './Sidebar.module.css';
import SubmitButton from '../SubmitButton/SubmitButton';

const Sidebar = () => {
    return (
        <aside className={css.sidebarContainer}>
            <Location />
            <FilterEquipments />
            <FilterTypesGroup />
            <SubmitButton buttonText="Search" />
        </aside>
    );
};

export default Sidebar;
