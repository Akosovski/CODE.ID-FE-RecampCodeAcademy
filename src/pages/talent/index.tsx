import { useEffect, useState } from 'react';
import talent from '../api/talent';
import '../styles/globals.css';

export default function TalentList() {
    const [Talent, setTalent] = useState<any[]>([]);

    useEffect(() => {
        talent.GetData().then(
            data => {
                setTalent(data)
            }
        );
    }, []);

    return (
        <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                    <th className="px-6 py-4">Entity ID</th>
                    <th className="px-6 py-4">National ID</th>
                    <th className="px-6 py-4">Birth Date</th>
                    <th className="px-6 py-4">Marital Status</th>
                    <th className="px-6 py-4">Gender</th>
                    <th className="px-6 py-4">Hire Date</th>
                    <th className="px-6 py-4">Vacation Hours</th>
                    <th className="px-6 py-4">Sick Hours</th>
                    <th className="px-6 py-4">Employee Type</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Talent && Talent.map(item => {
                            return (
                                <>
                                <tr>
                                    <th className="whitespace-nowrap px-6 py-4">
                                        {item.empEntityId} 
                                    </th>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empNationalId}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empBirthDate}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empMaritalStatus}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empGender}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empHireDate}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empVacationHours}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empSickleaveHours}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        {item.empType}
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>
    );
}