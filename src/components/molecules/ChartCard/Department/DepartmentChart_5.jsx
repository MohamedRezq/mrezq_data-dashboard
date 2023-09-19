import React, { useEffect, useState } from 'react'
import Image from 'next/image'
//-----> Actions <----------------------------------------------//

//-----> Utils <----------------------------------------------//

//-----> Redux <----------------------------------------------//
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/src/store'
//-----> Components <----------------------------------------------//
import Dropdown from 'rc-dropdown'
import { BsThreeDots } from 'react-icons/bs'
import { IoIosWarning } from 'react-icons/io'
import { MdVerified } from 'react-icons/md'
//-----> Assets <----------------------------------------------//
import dropDown from '@/public/assets/img/icons/arrow-down-sign-to-navigate.svg'
import { ChartMenu, CustomDropMenu } from '@/src/components/atoms'
import {
  setDepartmentChart_5,
  setDepartmentChart_5_PaymentType,
} from '@/src/store/slices/dashboard'
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

const DepartmentChart_5 = () => {
  //-------------------------------------------------------------------------//
  const dispatch = useDispatch()
  //-------------------------------------------------------------------------//
  const chartData = useSelector(
    (state) => state.dashboard.department.departmentChart_5,
  )
  const paymentType = useSelector(
    (state) => state.dashboard.department.departmentChart_5_PaymentType,
  )
  //-------------------------------------------------------------------------//
  const fetchData = async () => {
    try {
      const res = await httpServices.post(
        `${App_Config.API_BASE_URL}/api/dashboard/department/get-department-chart-5`,
        {
          organizationId: localStorage.getItem('organizationId'),
          fromDate: new Date(
            new Date().getFullYear() - 1,
            new Date().getMonth(),
            new Date().getDate(),
          ).toISOString(),
          toDate: new Date().toISOString(),
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      return res.data
    } catch (error) {
      // console.log(error);
      return undefined
    }
  }
  //-------------------------------------------------------------------------//
  useEffect(() => {
    fetchData().then((apiData) => {
      if (apiData !== undefined) dispatch(setDepartmentChart_5(apiData))
    })
  }, [])

  //-------------------------------------------------------------------------//
  return (
    <div
      className="col-span-1 rounded-2xl h-fit lg:h-[239px] dark:bg-darkMineShaft dark:text-white  mb-5 text-lightMineShaft font-bold w-full"
      style={{ boxShadow: '0px 3px 5px #00000029' }}
    >
      <div className=" bg-gallery h-8  dark:bg-[#3E3E3E] dark:text-white flex items-center text-[10px] rounded-tr-2xl rounded-tl-2xl relative px-7 py-1">
        Payment Type
        <Dropdown
          trigger={['click']}
          overlay={ChartMenu}
          animation="slide-up"
          placement="bottomLeft"
        >
          <BsThreeDots className="absolute right-5 top-2 text-dovegray cursor-pointer text-base" />
        </Dropdown>
      </div>
      <div
        className={`lg:h-[210px] h-fit pl-[29px] pr-[40px] bg-wildsand dark:bg-darkMineShaft dark:text-white  flex flex-col gap-y-1 whitespace-nowrap py-5 rounded-br-2xl rounded-bl-2xl`}
      >
        <div className=" flex justify-between items-start">
          <div className="flex flex-col gap-y-1 text-[10px]">
            <div>
              Paid via <span className=" text-[#32AD49]">{paymentType}</span>
            </div>
            <div className="text-[20px] font-bold text-[#2C2C2C] opacity-90 dark:text-white  mt-1 mb-5">
              ${' '}
              {Math.round(chartData[paymentType]?.total || 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex w-24 justify-around items-center gap-x-2 text-xxs bg-bonjour rounded-[10px] px-5 py-[5px] text-mineshaft dark:text-white pr-6">
              <div className="text-center font-medium text-xxs w-16 dark:text-mineshaft">
                {paymentType}
              </div>
              <Dropdown
                trigger={['click']}
                overlay={
                  <CustomDropMenu
                    selectedOption={paymentType}
                    options={['Cr. Card', 'De. Card']}
                    setterFunction={setDepartmentChart_5_PaymentType}
                  />
                }
                animation="slide-up"
              >
                <Image
                  src={dropDown}
                  alt="Menu"
                  width={8}
                  className="w-[8px] h-[4px] cursor-pointer"
                />
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="w-full gap-y-3 text-xs flex gap-x-3 flex-wrap pr-3">
          {chartData[paymentType]?.apps.map((app, i) => (
            <div
              key={`app-by-payment-type-${app.title}`}
              className={`flex justify-between w-full items-center`}
            >
              <div className="flex items-center gap-x-3">
                <div>{app.title}</div>
                <div>
                  {app.verified ? (
                    <MdVerified className="text-[#32AD49]" />
                  ) : (
                    <IoIosWarning className="text-[#848484]" />
                  )}
                </div>
              </div>
              <div>{app.payment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DepartmentChart_5
