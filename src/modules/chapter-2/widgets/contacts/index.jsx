import React, { useMemo, useState } from "react";
import { AccountLong } from "../components/AccountUI";
import { ButtonIcon, ButtonSearch } from "../components/ButtonUI";
import { Link } from "react-router-dom";
export function ContactUI({ my_account, friends }) {
  const my_friends = friends;
  const ResultData = useMemo(() => {
    let computedData = my_friends;
    return computedData;
  }, [my_friends]);
  return (
    <div
      className="card card-flush h-100 mb-5 mb-xl-10 rounded-0
rounded-start-1"
    >
      <div className="card-header">
        <div className="card-title">
          <AccountLong data={my_account} color={"danger"} />
        </div>
        <div className="card-toolbar">
          <Link
            to={"/sign-out"}
            className="btn btn-icon btn-sm"
            title="Sign out"
          >
            <i
              className="bi bi-box-arrow-right text-danger fw-bold fs-
2x"
            ></i>
          </Link>
        </div>
      </div>
      <div
        className="card-body d-flex flex-column justify-content-
between p-0"
      >
        <div className="my-contact border-top">
          <div
            className="filters p-5 border-bottom d-flex align-items-
center"
          >
            <ButtonSearch>
              <span
                className="svg-icon svg-icon-1 svg-icon-gray-400 me-
1"
              >
                <i class="bi bi-search"></i>
              </span>
            </ButtonSearch>
            <ButtonIcon>
              <i className={"bi fw-bold fs-2x bi-filter"}></i>
            </ButtonIcon>
          </div>
          <div className="friends">
            {/* <p className="text-center">list kontak dimari</p> */}
            {Object.values(ResultData).length > 0
              ? ResultData.map((v, index) => (
                  <div className={"friend-item "} key={index}>
                    <AccountLong data={v} color={"info"} />
                  </div>
                ))
              : "No Data Found!"}
          </div>
        </div>
        <p className="fs-8 text-center mb-0 py-3">
          <i className="bi bi-lock-fill"></i>
          <span className="ms-1">
            Your personal messages are{" "}
            <span className="text-info">end-to-end encrypted</span>
          </span>
        </p>
      </div>
    </div>
  );
}
