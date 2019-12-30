import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview';
import ResumePagePreview from './preview-templates/ResumePagePreview';
import GalleryPagePreview from './preview-templates/GalleryPagePreview';
import MediaPagePreview from './preview-templates/MediaPagePreview';

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('resume', ResumePagePreview);
CMS.registerPreviewTemplate('gallery', GalleryPagePreview);
CMS.registerPreviewTemplate('media', MediaPagePreview);
