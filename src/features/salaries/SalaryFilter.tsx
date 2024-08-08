import { BsCalendarMonthFill, BsFillCalendarFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { SalaryDate } from "../../types/Salary";
import { Link } from "react-router-dom";

const SalaryFilter: React.FC<{ currentDate: SalaryDate, onDateChange: (date: SalaryDate) => void }> = ({ currentDate, onDateChange }) => {
    const handleMonthChange = (e) => {
        onDateChange({ ...currentDate, month: e.target.value });
    };

    const handleYearChange = (e) => {
        onDateChange({ ...currentDate, year: e.target.value });
    };

    return (
        <div className="flex flex-col sm:flex-row justify-between mb-4">
            <div className="flex items-center mb-2 sm:mb-0">
                <div>
                    <label className="mb-3 block text-black text-sm dark:text-white">
                        Select Month
                    </label>

                    <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                            <BsCalendarMonthFill />
                        </span>

                        <select
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-meta-5 active:border-meta-5 dark:border-form-strokedark dark:bg-form-input`}
                            value={currentDate.month}
                            onChange={handleMonthChange}
                        >
                            <option value="1" className="text-body dark:text-bodydark">1</option>
                            <option value="2" className="text-body dark:text-bodydark">2</option>
                            <option value="3" className="text-body dark:text-bodydark">3</option>
                            <option value="4" className="text-body dark:text-bodydark">4</option>
                            <option value="5" className="text-body dark:text-bodydark">5</option>
                            <option value="6" className="text-body dark:text-bodydark">6</option>
                            <option value="7" className="text-body dark:text-bodydark">7</option>
                            <option value="8" className="text-body dark:text-bodydark">8</option>
                            <option value="9" className="text-body dark:text-bodydark">9</option>
                            <option value="10" className="text-body dark:text-bodydark">10</option>
                            <option value="11" className="text-body dark:text-bodydark">11</option>
                            <option value="12" className="text-body dark:text-bodydark">12</option>
                        </select>

                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <FaAngleDown />
                        </span>
                    </div>
                </div>
                <div className="ml-10">
                    <label className="mb-3 block text-black font-thin text-sm dark:text-white">
                        Select Year
                    </label>

                    <div className="relative z-20 bg-white dark:bg-form-input">
                        <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                            <BsFillCalendarFill />
                        </span>

                        <select
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-meta-5 active:border-meta-5 dark:border-form-strokedark dark:bg-form-input`}
                            value={currentDate.year}
                            onChange={handleYearChange}
                        >
                            <option value="2014" className="text-body dark:text-bodydark">2014</option>
                            <option value="2015" className="text-body dark:text-bodydark">2015</option>
                            <option value="2016" className="text-body dark:text-bodydark">2016</option>
                            <option value="2017" className="text-body dark:text-bodydark">2017</option>
                            <option value="2018" className="text-body dark:text-bodydark">2018</option>
                            <option value="2019" className="text-body dark:text-bodydark">2019</option>
                            <option value="2020" className="text-body dark:text-bodydark">2020</option>
                            <option value="2021" className="text-body dark:text-bodydark">2021</option>
                            <option value="2022" className="text-body dark:text-bodydark">2022</option>
                            <option value="2023" className="text-body dark:text-bodydark">2023</option>
                            <option value="2024" className="text-body dark:text-bodydark">2024</option>
                        </select>

                        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <FaAngleDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
            <Link
            to={"/salaries/history"}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                >
                Show History
            </Link>
            </div>
        </div>
    );
};

export default SalaryFilter;  