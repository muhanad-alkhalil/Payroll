import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { Employee, EmployeePayload } from '../../types/Employee';
import DatePicker from '../../components/Forms/DatePicker';
import employeeService from './EmployeeService';

const EmployeeDialog = ({
  isOpen,
  closeModal,
  onActionSuccess,
  employeeToUpdate
}: {
  isOpen: boolean;
  closeModal: () => void;
  onActionSuccess: () => void;
  employeeToUpdate?: Employee
}) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [employee, setEmployee] = useState<EmployeePayload>({
    staffId: '',
    name: '',
    joiningDate: '',
    basicSalary: '',
    salaryAllowances: '',
  })

  useEffect(() => {
    if (employeeToUpdate) {
        setEmployee({
            staffId: employeeToUpdate.staffId,
            name: employeeToUpdate.name,
            joiningDate: employeeToUpdate.joiningDate,
            basicSalary: employeeToUpdate.basicSalary,
            salaryAllowances: employeeToUpdate.salaryAllowances,
        });
    } else {
        setEmployee({
            staffId: '',
            name: '',
            joiningDate: '',
            basicSalary: '',
            salaryAllowances: '',
        });
    }
}, [employeeToUpdate]);  

  useEffect(() => {
    if (success) {
      onActionSuccess();
      closeModal();
    }
  }, [success]);

  useEffect(() => {
    if (!isOpen) {
      setError('');
      setLoading(false);
      setSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      if (employeeToUpdate) {
        await employeeService.update(employeeToUpdate.id, employee);
      }else{
        await employeeService.add(employee);
      }
      setSuccess(true);
      setLoading(false);
      setEmployee({
        staffId: '',
        name: '',
        joiningDate: '',
        basicSalary: '',
        salaryAllowances: '',
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
              className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-5 active:border-meta-5 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              onKeyDown={async (event) => {
                if (event.key === 'Enter') {
                  await handleSubmit();
                }
              }}
              >
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {employeeToUpdate ? 'Update' : 'Add'} Employee
                </DialogTitle>
                <div className="rounded-sm  bg-white dark:bg-boxdark">
                  <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5.5 p-6.5">
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Staff ID
                      </label>
                      <input
                        type="text"
                        placeholder="Staff ID"
                        value={employee.staffId}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-5 active:border-meta-5 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmployee({ ...employee, staffId: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={employee.name}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-5 active:border-meta-5 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Joining Date
                      </label>
                      <DatePicker value={employee.joiningDate} onDateSelect={(date) => setEmployee({ ...employee, joiningDate: date })} />

                    </div>
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Basic Salary
                      </label>
                      <input
                        type="text"
                        placeholder="Basic Salary"
                        value={employee.basicSalary}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-5 active:border-meta-5 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmployee({ ...employee, basicSalary: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="mb-3 block text-black dark:text-white">
                        Salary Allowances
                      </label>
                      <input
                        type="text"
                        placeholder="Salary Allowances"
                        value={employee.salaryAllowances}
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-meta-5 active:border-meta-5 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        onChange={(e) => setEmployee({ ...employee, salaryAllowances: e.target.value })}
                      />
                    </div>
                    {error && (
                      <div className="mt-2 text-sm text-red-500">{error}</div>
                    )}

                    <div className="mt-4">
                      <button
                        type="button"
                        className="ml-auto inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={async () => await handleSubmit()}
                        disabled={loading}
                      >
                        {loading ? 'Submit...' : 'Submit'}
                      </button>
                    </div>

                    {success && (
                      <div className="mt-4 text-md font-medium text-green-600">
                        Submitted successfully
                      </div>
                    )}
                  </div>

                </div>



              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default EmployeeDialog;
