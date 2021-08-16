import _ from "lodash";
import React from "react";

function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  _.take();
  return _(items).slice(startIndex).take(pageSize).value();
}

export default paginate;
