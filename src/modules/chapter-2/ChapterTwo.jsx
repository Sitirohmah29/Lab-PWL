import React from "react";
import { ContactUI } from "./widgets/contacts";
import { MyFriend } from "./widgets/constanta/DataChat";
export function ChapterTwo() {
  const myProfile = { id: "0419029203", name: "Febry" };
  return (
    <div id="chapter-2">
      <h1 className="text-white mb-5">
        Chapter two: The Authentications and Messegers
      </h1>
      <div className="px-3">
        <div className="row">
          <div className="col-2 col-lg-3 col-xxl-4 px-0">
            <ContactUI my_account={myProfile} friends={MyFriend} />
          </div>
          <div className="col-10 col-lg-9 col-xxl-8 px-0">
            (Messeging disini)
          </div>
        </div>
      </div>
    </div>
  );
}
