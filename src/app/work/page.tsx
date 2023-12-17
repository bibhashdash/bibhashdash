'use client';
import {useClientDimensions} from "@/utilities/clientDimensions";
import {ContentCardWrapper} from "@/components/ContentCardWrapper";
import {PortfolioData, PortfolioDataModel} from "@/data/portfolioData";
import {PortfolioTextContent} from "@/components/PortfolioTextContent";
import Modal from '@mui/material/Modal';
import React, {useState} from "react";
import {PortfolioGalleryCard} from "@/components/PortfolioGalleryCard";
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '900px',
  padding: '4px',
  borderRadius: '10px',
  height: 'fit-content',
  backgroundColor: 'background.paper',
  boxShadow: 24,
};
export default function Work() {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<PortfolioDataModel>(PortfolioData[0]);
  const handleClose = () => setOpen(false);
  const handleClick = (id: number) => {
    setOpen(true);
    const temp = PortfolioData.find(item => item.id === id);
    temp && setModalContent(temp);
  }
  useClientDimensions();
  return (
    <div className="flex h-full flex-col pb-12">
      <p className="w-full text-lg text-center md:text-left font-bold">My Projects</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            PortfolioData.map(item => (
              <PortfolioGalleryCard key={item.id} portfolioItem={item} onClick={id => handleClick(id)} />
            ))
          }
        </div>
      <Modal open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description">
        <Box sx={style}>
          <ContentCardWrapper title={modalContent.title} imageSource={modalContent.imageSource}>
            <PortfolioTextContent workType={modalContent.workType} techStack={modalContent.techStack} description={modalContent.description} />
          </ContentCardWrapper>
        </Box>
      </Modal>
    </div>
  )
}
