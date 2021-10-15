import React, { useState } from 'react';

import ListWriteups from './ListWriteups';

const Writeups = () => {
  const [writeup, setWriteup] = useState({
    name: "",
    body: "",
  });

  return (
    <div>
      <ListWriteups writeup={writeup} setWriteup={setWriteup} />
    </div>
  );
};

export default Writeups;
