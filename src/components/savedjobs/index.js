import React from "react";

function Profile() {
  return (
    <div className="flex min-h-screen w-full flex-col space-y-2">
      <div className="w-full flex-none">
        <nav className="flex justify-between p-4 lg:px-12 lg:py-7">
          <div className="flex-none">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="24"
                viewBox="0 0 141 24"
                fill="none"
                role="img"
                arialabelledby="jobstreet-logo-title"
              >
                <title id="jobstreet-logo-title">JobStreet</title>
                <path
                  fill="#1C1C1C"
                  d="M26.514 6.342c4.897 0 8.828 3.846 8.828 8.829 0 4.983-3.931 8.829-8.828 8.829-4.897 0-8.794-3.846-8.794-8.829 0-4.983 3.897-8.829 8.794-8.829ZM41.06.122v8.662c1.199-1.539 2.964-2.442 5.396-2.442 4.464 0 8.128 3.846 8.128 8.829 0 4.983-3.664 8.829-8.128 8.829-2.432 0-4.197-.903-5.396-2.442v1.974H36.76V.122h4.297ZM64.394 0c3.671 0 6.595 1.779 8.145 4.904l-3.864 2.24c-.833-1.772-2.145-2.663-4.281-2.663-1.763 0-3.247.974-3.247 2.16 0 1.438.899 2.042 4.43 3.112 3.698 1.17 7.628 2.408 7.628 7.19 0 4.381-3.498 7.057-8.46 7.057-4.765 0-7.896-2.308-9.162-5.786l3.931-2.308c.833 2.174 2.465 3.579 5.363 3.579 2.765 0 3.731-1.17 3.731-2.475 0-1.739-1.565-2.408-5.03-3.411-3.564-1.037-7.029-2.376-7.029-6.824C56.55 2.52 60.593 0 64.395 0Zm39.726 6.342c4.93 0 8.428 3.913 8.428 8.829a10.1 10.1 0 0 1-.166 1.773h-12.56c.601 2.207 2.433 3.143 4.698 3.143 1.666 0 2.998-.702 3.731-1.672l3.464 2.007c-1.566 2.273-4.064 3.578-7.262 3.578-5.596 0-9.127-3.846-9.127-8.83 0-4.982 3.564-8.828 8.794-8.828Zm18.501 0c4.93 0 8.428 3.913 8.428 8.829a10.1 10.1 0 0 1-.166 1.773h-12.559c.6 2.207 2.432 3.143 4.697 3.143 1.666 0 2.998-.702 3.731-1.672l3.465 2.007c-1.566 2.273-4.065 3.578-7.263 3.578-5.596 0-9.127-3.846-9.127-8.83 0-4.982 3.565-8.828 8.794-8.828ZM16.395.127V16.25c0 1.085-.166 2.06-.471 2.924a6.765 6.765 0 0 1-2.662 3.43c-.004.007-.007.01-.011.01-1.34 1.022-3.305 1.381-4.772 1.381-3.827 0-7.044-1.682-8.048-4.913C.126 18.097 0 16.864 0 15.026l4.654.005c-.028 1.915.219 3.35 1.655 4.168 1.299.741 4.117.7 5.094-1.408.573-1.237.427-3.292.427-4.66V.127h4.565Zm62.75.934v5.75h3.764v4.146h-3.764v6.956c0 1.806 1.299 1.84 3.764 1.706v3.912c-6.03.67-8.061-1.103-8.061-5.618V1.06h4.297Zm58.068 0v5.75h3.764v4.146h-3.764v6.956c0 1.806 1.299 1.84 3.764 1.706v3.912c-6.03.67-8.062-1.103-8.062-5.618V1.06h4.298ZM94.681 6.476v4.815c-2.232-.267-5.063.736-5.063 4.248v7.993H85.32V6.81h4.298v2.876c.865-2.274 2.964-3.21 5.063-3.21Zm-49.025 3.98c-2.632 0-4.597 1.906-4.597 4.715 0 2.81 1.965 4.716 4.597 4.716 2.665 0 4.63-1.907 4.63-4.716 0-2.81-1.965-4.715-4.63-4.715Zm-19.142.1c-2.532 0-4.497 1.906-4.497 4.615 0 2.709 1.965 4.615 4.497 4.615 2.565 0 4.53-1.906 4.53-4.615 0-2.709-1.965-4.615-4.53-4.615Zm77.606-.335c-2.298 0-3.864 1.238-4.364 3.378h8.495c-.533-2.408-2.332-3.378-4.131-3.378Zm18.501 0c-2.298 0-3.864 1.238-4.364 3.378h8.495c-.533-2.408-2.332-3.378-4.131-3.378Z"
                />
              </svg>
            </a>
          </div>
          <div className="flex-none">
            <form method="GET" action="/logout">
              <button
                type="button"
                className="text-sm text-grey-600 hover:text-grey-400 hover:underline dark:text-grey-400 dark:hover:text-grey-200"
              >
                Thoát
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="w-full flex-auto">
        <main className="mx-auto max-w-xl">
          <div className=" lg:gap-10 lg:px-4 lg:flex lg:columns-3">
            <div className="hidden lg:w-[17.625rem] lg:flex-none lg:block" />
            <div className="flex lg:hidden" />
            <div id="main" className="lg:flex-1  lg:max-w-md lg:py-7 p-4">
              <h2 className="text-lg font-bold mb-12">Tạo hồ sơ</h2>
              <div className="mb-9" />
              <form method="post" action="/pa/profile/edit" id="edit-profile">
                <div className="space-y-4">
                  <div className="relative flex flex-col">
                    <div htmlFor="givenName" className="">
                      Tên
                    </div>
                    <input
                      type="text"
                      id="givenName"
                      name="givenName"
                      className="
w-full
border rounded h-12 pl-4
text-current text-base
dark:bg-grey-800
placeholder:text-grey-600
focus:outline-none 
disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed
border-grey-400 focus:border-green-700

"
                      required
                    />
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="surName" className="">
                      Họ
                    </div>
                    <input
                      type="text"
                      id="surName"
                      name="surName"
                      className="
w-full
border rounded h-12 pl-4
text-current text-base
dark:bg-grey-800
placeholder:text-grey-600
focus:outline-none 
disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed
border-grey-400 focus:border-green-700

"
                    />
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="phoneNumber" className="">
                      Số điện thoại
                    </div>
                    <div
                      className="
w-full
border rounded h-12 pl-4
text-current text-base
dark:bg-grey-800
placeholder:text-grey-600
focus:outline-none 
disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed
border-grey-400 focus:border-green-700

gap-2 focus-within:border-green-700 PhoneInput"
                    >
                      <div className="PhoneInputCountry">
                        <select
                          name="phoneNumberCountry"
                          arialabel="Phone number country"
                          className="PhoneInputCountrySelect"
                        >
                          <option value="VN" selected="">
                            Vietnam
                          </option>
                          <option value="VG">Virgin Islands, British</option>
                        </select>
                        <div
                          aria-hidden="true"
                          className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
                        >
                          <img
                            className="PhoneInputCountryIconImg"
                            alt="Vietnam"
                            src="https://jora-echo-assets.jora.com/flags/VN.svg"
                          />
                        </div>
                        <div className="PhoneInputCountrySelectArrow" />
                      </div>
                      <input
                        type="tel"
                        autoComplete="tel"
                        rules="[object Object]"
                        name="phoneNumber"
                        className="w-full focus:outline-none disabled:bg-grey-50 dark:bg-grey-800"
                        arialabel="Phone number"
                        value="+84"
                      />
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="currentLocation" className="">
                      Địa chỉ
                    </div>
                    <span
                      role="status"
                      className="text-grey-600 dark:text-grey-400 mt-1 text-sm"
                      data-dd-privacy="allow"
                    >
                      Chia sẻ địa chỉ của bạn để xem được nhiều hơn các vị trị
                      gần đó. Chỉ tên huyện/tỉnh sẽ hiển thị trên hồ sơ của bạn.
                    </span>
                  </div>
                  <input
                    type="hidden"
                    name="currentLocationCoordinatesSerialized"
                  />
                  <input type="hidden" name="addressComponentsSerialized" />
                  <div className="relative flex flex-col">
                    <fieldset name="workEligibility">
                      <legend className="">
                        Điều nào sau đây miêu tả đúng nhất thị thực làm việc của
                        bạn ở Việt Nam?
                      </legend>
                      <div
                        arialabel="workEligibility"
                        id="headlessui-radiogroup-:R8kt99:"
                        role="radiogroup"
                      >
                        <div
                          className="group"
                          id="headlessui-radiogroup-option-:R6okt99:"
                          role="radio"
                          aria-checked="false"
                          tabIndex="-1"
                          data-headlessui-state=""
                        >
                          <div className="items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                            <span
                              className="mt-[0.2rem]
size-4 shrink-0 rounded-full border border-grey-900 bg-white group-focus:ring
group-aria-checked:border-green-700 group-aria-checked:bg-green-700 group-aria-checked:shadow-[0_0_0_3px_white_inset]
group-aria-disabled:cursor-not-allowed
group-aria-disabled:border-grey-200 group-aria-disabled:bg-grey-100
"
                            />
                            <span
                              role="presentation"
                              className="flex flex-col group-aria-disabled:cursor-not-allowed"
                            >
                              <span
                                className="flex items-center group-aria-disabled:text-grey-400"
                                data-dd-privacy="allow"
                              >
                                <span>
                                  Tôi <strong>không phải</strong> là Công dân
                                  hay Thường trú nhân của Việt Nam và tôi cần
                                  Nhà tuyển dụng nộp đơn xin giấy phép lao
                                  động/giấy phép/visa cho tôi.
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                        <div
                          className="group"
                          id="headlessui-radiogroup-option-:Raokt99:"
                          role="radio"
                          aria-checked="false"
                          tabIndex="-1"
                          data-headlessui-state=""
                        >
                          <div className="items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                            <span
                              className="mt-[0.2rem]
size-4 shrink-0 rounded-full border border-grey-900 bg-white group-focus:ring
group-aria-checked:border-green-700 group-aria-checked:bg-green-700 group-aria-checked:shadow-[0_0_0_3px_white_inset]
group-aria-disabled:cursor-not-allowed
group-aria-disabled:border-grey-200 group-aria-disabled:bg-grey-100
"
                            />
                            <span
                              role="presentation"
                              className="flex flex-col group-aria-disabled:cursor-not-allowed"
                            >
                              <span
                                className="flex items-center group-aria-disabled:text-grey-400"
                                data-dd-privacy="allow"
                              >
                                <span>
                                  Tôi là Công dân, Thường trú nhân hoặc có tư
                                  cách tương tự ở Việt Nam và sẽ không cần Nhà
                                  tuyển dụng nộp đơn xin giấy phép lao động/giấy
                                  phép/visa cho tôi.
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="aboutMe" className="">
                      Tuyển dụng tôi vì (tùy chọn)
                    </div>
                    <textarea
                      rows="4"
                      name="aboutMe"
                      id="aboutMe"
                      placeholder="Hãy cho chúng tôi biết điều gì khiến bạn nổi bật!
Ví dụ: Tôi là nhân viên thư ký có 3 năm kinh nghiệm, gõ thành thạo 60 từ một phút và có chứng chỉ MS Excel"
                      className="
border rounded p-4
text-current text-base
dark:bg-grey-800
placeholder:text-grey-600
focus:outline-none 
disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed
border-grey-400 focus:border-green-700
"
                    />
                    <p
                      arialabel="character-counter"
                      className="
text-right
text-sm
text-grey-600 dark:text-grey-400
"
                    >
                      Số ký tự tối đa: 300
                    </p>
                  </div>
                  <div>
                    <hr className="my-8 h-px border-t-grey-100" />
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="currentRole" className="">
                      Chức danh hiện tại (tùy chọn)
                    </div>
                    <input
                      type="text"
                      id="currentRole"
                      name="currentRole"
                      className="
w-full
border rounded h-12 pl-4
text-current text-base
dark:bg-grey-800
placeholder:text-grey-600
focus:outline-none 
disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed
border-grey-400 focus:border-green-700

"
                    />
                  </div>
                  <div>
                    <hr className="my-8 h-px border-t-grey-100" />
                  </div>
                  <div>
                    <div className="mb-8">
                      <div className="relative flex flex-col">
                        <div htmlFor="caLMViCCThể" className="font-bold pb-6">
                          Ca làm việc có thể
                        </div>
                        <button
                          type="button"
                          aria-hidden="true"
                          // style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"
                        />
                        <div>
                          <div
                            className="flex items-center justify-center rounded-xl px-5 lg:px-0"
                            role="tablist"
                            aria-orientation="horizontal"
                          >
                            <button
                              className="text-center items-center justify-center whitespace-nowrap sm:px-10 px-2 py-3 w-1/2 border-b-2 focus-visible:outline focus-visible:-outline-offset-2 border-green-700 text-green-700"
                              id="headlessui-tabs-tab-:Rb8pt99:"
                              role="tab"
                              type="button"
                              aria-selected="true"
                              tabIndex="0"
                              data-headlessui-state="selected"
                            >
                              Thời gian cụ thể
                            </button>
                            <button
                              className="text-center items-center justify-center whitespace-nowrap sm:px-10 px-2 py-3 w-1/2 border-b-2 focus-visible:outline focus-visible:-outline-offset-2 border-grey-100 hover:text-green-700 focus:text-green-700"
                              id="headlessui-tabs-tab-:Rj8pt99:"
                              role="tab"
                              type="button"
                              aria-selected="false"
                              tabIndex="-1"
                              data-headlessui-state=""
                            >
                              Bất cứ lúc nào
                            </button>
                          </div>
                          <div>
                            <div
                              className="mt-8"
                              id="headlessui-tabs-panel-:Rd8pt99:"
                              role="tabpanel"
                              tabIndex="-1"
                              data-headlessui-state="selected"
                            >
                              <div className="grid grid-rows-[8] gap-5 text-sm">
                                <input
                                  type="checkbox"
                                  hidden=""
                                  name="shiftAvailability.anyTimeShiftAvailability"
                                />
                                <div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">All</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.all.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="All morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.all.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="All afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.all.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="All evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex">
                                    <div className="w-8 shrink"> </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      Sáng
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      Chiều
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      Tối
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-rows-[7] gap-11">
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Mon</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.monday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Monday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.monday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Monday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.monday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Monday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Tue</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.tuesday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Tuesday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.tuesday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Tuesday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.tuesday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Tuesday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Wed</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.wednesday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Wednesday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.wednesday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Wednesday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.wednesday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Wednesday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Thu</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.thursday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Thursday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.thursday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Thursday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.thursday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Thursday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Fri</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.friday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Friday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.friday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Friday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.friday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Friday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Sat</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.saturday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Saturday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.saturday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Saturday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.saturday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Saturday evening"
                                      />
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-center">
                                    <div className="w-8 shrink">Sun</div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.sunday.morning"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Sunday morning"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.sunday.afternoon"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Sunday afternoon"
                                      />
                                    </div>
                                    <div className="mx-auto flex basis-1/3 items-center justify-center">
                                      <input
                                        name="shiftAvailability.specificShiftAvailability.sunday.evening"
                                        type="checkbox"
                                        className="size-4 cursor-pointer accent-green-700 "
                                        arialabel="Sunday evening"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr className="mt-7 h-px border-t-grey-100" />
                            </div>
                            <span
                              id="headlessui-tabs-panel-:Rl8pt99:"
                              role="tabpanel"
                              tabIndex="-1"
                              // style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0"
                            />
                          </div>
                        </div>
                        <input
                          type="text"
                          aria-hidden="true"
                          tabIndex="-1"
                          className="h-0 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col">
                    <fieldset name="privacySetting">
                      <legend className="font-bold pb-6">
                        Cài đặt Bảo Mật
                      </legend>
                      <div
                        arialabel="privacySetting"
                        id="headlessui-radiogroup-:R8qt99:"
                        role="radiogroup"
                      >
                        <div
                          className="group"
                          id="headlessui-radiogroup-option-:R6oqt99:"
                          role="radio"
                          aria-checked="false"
                          tabIndex="-1"
                          data-headlessui-state=""
                        >
                          <div className="items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                            <span
                              className="mt-[0.2rem]
size-4 shrink-0 rounded-full border border-grey-900 bg-white group-focus:ring
group-aria-checked:border-green-700 group-aria-checked:bg-green-700 group-aria-checked:shadow-[0_0_0_3px_white_inset]
group-aria-disabled:cursor-not-allowed
group-aria-disabled:border-grey-200 group-aria-disabled:bg-grey-100
"
                            />
                            <span
                              role="presentation"
                              className="flex flex-col group-aria-disabled:cursor-not-allowed"
                            >
                              <span
                                className="flex items-center group-aria-disabled:text-grey-400"
                                data-dd-privacy="allow"
                              >
                                <span>Chia sẻ hồ sơ</span>
                                <span className="ml-2 inline-block bg-purple-100 px-2 py-1 text-2xs text-grey-900 group-aria-disabled:text-grey-400">
                                  Gợi ý
                                </span>
                              </span>
                              <span className="my-1 text-xs text-grey-600 group-aria-disabled:text-grey-400 dark:text-grey-400">
                                Nhà tuyển dụng có thể xem hồ sơ của tôi và liên
                                hệ với tôi về các cơ hội việc làm tiềm năng.
                              </span>
                            </span>
                          </div>
                        </div>
                        <div
                          className="group"
                          id="headlessui-radiogroup-option-:Raoqt99:"
                          role="radio"
                          aria-checked="false"
                          tabIndex="-1"
                          data-headlessui-state=""
                        >
                          <div className="items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                            <span
                              className="mt-[0.2rem]
size-4 shrink-0 rounded-full border border-grey-900 bg-white group-focus:ring
group-aria-checked:border-green-700 group-aria-checked:bg-green-700 group-aria-checked:shadow-[0_0_0_3px_white_inset]
group-aria-disabled:cursor-not-allowed
group-aria-disabled:border-grey-200 group-aria-disabled:bg-grey-100
"
                            />
                            <span
                              role="presentation"
                              className="flex flex-col group-aria-disabled:cursor-not-allowed"
                            >
                              <span
                                className="flex items-center group-aria-disabled:text-grey-400"
                                data-dd-privacy="allow"
                              >
                                <span>Không chia sẻ hồ sơ</span>
                              </span>
                              <span className="my-1 text-xs text-grey-600 group-aria-disabled:text-grey-400 dark:text-grey-400">
                                Hồ sơ của tôi chỉ có thể được nhìn thấy bởi nhà
                                tuyển dụng khi nộp đơn ứng tuyển.
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div>
                    <hr className="my-8 h-px border-t-grey-100" />
                  </div>
                  <div className="relative flex flex-col">
                    <div htmlFor="resume" className="font-bold pb-6">
                      Sơ yếu lý lịch
                    </div>
                    <div
                      className="text-center rounded flex items-center justify-center focus:outline-none focus:ring whitespace-nowrap border bg-white dark:bg-grey-900 border-green-700 text-green-700 hover:text-green-600 hover:border-green-600 active:text-green-800 active:border-green-800 active:bg-green-200 dark:active:bg-grey-800 disabled:border-none disabled:bg-green-200 disabled:text-green-600 disabled:cursor-not-allowed text-base h-12 leading-[3rem] px-8 w-72 cursor-pointer"
                      role="presentation"
                      // tabIndex="0"
                    >
                      <input
                        accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx"
                        type="file"
                        // style="display:none"
                        tabIndex="-1"
                        data-testid="dropzone-newfile"
                      />
                      Cập nhật dữ liệu
                    </div>
                    <input
                      type="hidden"
                      id="resume"
                      data-testid="resume-file-hidden-field"
                      name="resume"
                    />
                    <span
                      role="status"
                      className="text-grey-600 dark:text-grey-400 mt-1 text-sm"
                      data-dd-privacy="allow"
                    >
                      Loại tập tin: .pdf, .doc, .docx. Kích thước tối đa của
                      tệp: 4.3 MB.
                    </span>
                  </div>
                  <div className="mt-8">
                    <div className="flex gap-2">
                      <button
                        className="text-center rounded flex items-center justify-center focus:outline-none focus:ring whitespace-nowrap border bg-white dark:bg-grey-900 border-green-700 text-green-700 hover:text-green-600 hover:border-green-600 active:text-green-800 active:border-green-800 active:bg-green-200 dark:active:bg-grey-800 disabled:border-none disabled:bg-green-200 disabled:text-green-600 disabled:cursor-not-allowed text-base h-12 leading-[3rem] px-8 basis-1/2 border text-center"
                        type="button"
                        data-dd-privacy="allow"
                      >
                        Hủy bỏ
                      </button>
                      <button
                        className="text-center rounded flex items-center justify-center focus:outline-none focus:ring whitespace-nowrap bg-green-700 text-white hover:bg-green-600 active:bg-green-800 disabled:bg-green-200 disabled:text-green-600 disabled:cursor-not-allowed text-base h-12 leading-[3rem] px-8 grow basis-1/2"
                        type="submit"
                        data-dd-privacy="allow"
                      >
                        Tạo hồ sơ
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div className="flex-none">
        <footer className="bg-grey-100 py-2 text-sm dark:bg-black">
          <div className="p-6 mx-auto max-w-lg">
            <div className="font text-right">©2024 Job Seeker Pty Ltd</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Profile;
