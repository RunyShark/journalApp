import {
  JournalLayout,
  NoThingSelectedView,
  NoteView,
  ImagenGallery,
} from "../../index";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NoThingSelectedView /> */}
      <NoteView />
      <ImagenGallery />
    </JournalLayout>
  );
};
