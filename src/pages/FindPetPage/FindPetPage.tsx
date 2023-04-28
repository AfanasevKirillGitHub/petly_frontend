import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { FindPetNan } from '../../components/FindPetNan/FindPetNan';
import AddNotice from '../../components/AddNotice/AddNotice';
import { Modal } from '../../components/Modal/Modal';
import { AddPetBtn } from '../../components/AddPetBtn/AddPetBtn';

export const FindPetPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <h1>FindPetPage</h1>
      <FindPetNan />

      <AddPetBtn toggleModal={modalHandler} />

      {isModalOpen && (
        <Modal toggleModal={modalHandler}>
          <AddNotice toggleModal={modalHandler} />
        </Modal>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
