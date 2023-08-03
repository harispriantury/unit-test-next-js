"use client"
import React, { useEffect, useState } from 'react'
import Clock from '../components/Clock';
import { data } from 'autoprefixer';

interface IThead {
    name: string
}

const thead: IThead[] = [
    { name: "Tanggal" },
    { name: "Imsyak" },
    { name: "Subuh" },
    { name: "Terbit" },
    { name: "Dhuha" },
    { name: "Dzuhur" },
    { name: "Ashar" },
    { name: "Maghrib" },
    { name: "Isya" }
]

interface ICity {
    code: number;
    name: string
}

interface IDataSchedule {
    tanggal: string,
    imsak: string,
    subuh: string,
    terbit: string,
    dhuha: string,
    dzuhur: string,
    ashar: string,
    maghrib: string,
    isya: string,
    date: string
}

interface ISelectedCity {
    name: string;
    code: string
}

interface ISchedule {
    id: string;
    lokasi: string,
    daerah: string,
    jadwal: IDataSchedule[]
}

interface IScheduleTime {
    citiCode: string;
    year: string;
    month: string;
}

const JadwalSholat = () => {
    const [cities, setCities] = useState<ICity[]>([])
    const [selectedCity, setSelectedCity] = useState<string>("1412");
    const [datas, setDatas] = useState<ISchedule>();
    const option = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const [scheduleTime, setScheduleTime] = useState<IScheduleTime>({
        citiCode: "1412",
        month: option[new Date().getMonth()],
        year: String(new Date().getFullYear())
    });
    const [filter, setFilter] = useState<string>("");


    const getCity = async () => {
        try {
            const response = await fetch('https://api.myquran.com/v1/sholat/kota/semua');
            const data = await response.json();
            if (data) {
                const result = data.map((item: any): ICity => {
                    return {
                        code: parseInt(item.id),
                        name: item.lokasi
                    }
                }).sort((a: ICity, b: ICity) => {
                    const name1 = a.name.toLowerCase();
                    const name2 = b.name.toLowerCase();

                    let comparison = 0;
                    if (name1 > name2) {
                        comparison = 1
                    } else if (name1 < name2) {
                        comparison = -1
                    }
                    return comparison
                })

                setCities(result)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const getSchedule = async (code: string) => {
        try {
            const response = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${code}/${scheduleTime.year}/${scheduleTime.month}`);
            const data = await response.json();
            if (data) {
                setDatas(data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const value = cities.filter((item) => filter.includes(item.name.toUpperCase()))
        setCities(value)
    }, [filter])

    useEffect(() => {
        getSchedule(selectedCity)
    }, [selectedCity])

    useEffect(() => {
        getCity();
        if (selectedCity === "1412") {
            getSchedule(scheduleTime.citiCode);

        }
    }, [])
    return (
        <div className='flex flex-col justify-center gap-5'>
            <div className="flex justify-between mt-5 items-center">
                <select
                    value={selectedCity}
                    className='bg-white text-greenDark p-2 rounded-lg outline-none no-scrollbar'
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCity(e.target.value)}>
                    {
                        cities &&
                        cities.map((item) => {
                            return (
                                <option
                                    className='text-greenDark'
                                    key={item.code}
                                    value={item.code}
                                >
                                    {item.name}
                                </option>
                            )
                        })
                    }
                </select>
                <Clock />
            </div>
            <div className='w-full bg-greenDark text-white p-12 text-center rounded-t-xl text-3xl'>
                <h1>JADWAL SHOLAT WILAYAH  {datas?.lokasi ? datas.lokasi : "Kebumen"} dan SEKITARNYA</h1>
                <p>{months[parseInt(scheduleTime.month) - 1]} {String(new Date().getFullYear())}</p>
            </div>
            <div className='bg-white text-center'>
                <table className='w-full xl:text-lg'>
                    <thead className='bg-greenDark text-white rounded-t-lg'>
                        <tr>
                            {thead.map((item) => {
                                return (
                                    <th key={item.name}>
                                        {item.name}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            datas?.jadwal.map((item, index) => {
                                return (
                                    <tr key={index} className={`${index % 2 == 0 ? 'bg-grayLight' : 'bg-white'}`}>
                                        <td>{item.date}</td>
                                        <td>{item.imsak}</td>
                                        <td>{item.subuh}</td>
                                        <td>{item.terbit}</td>
                                        <td>{item.dhuha}</td>
                                        <td>{item.dzuhur}</td>
                                        <td>{item.ashar}</td>
                                        <td>{item.maghrib}</td>
                                        <td>{item.isya}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    datas?.jadwal.length == 0 || !datas?.jadwal && (
                        <div className='h-96 py-20 w-full bg-white text-center text-greenDark text-3xl'>
                            Data kosong
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default JadwalSholat;    
