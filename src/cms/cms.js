import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview';
import ResumePagePreview from './preview-templates/ResumePagePreview';
import GalleryPagePreview from './preview-templates/GalleryPagePreview';
import MediaPagePreview from './preview-templates/MediaPagePreview';


CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('resume', ResumePagePreview);
CMS.registerPreviewTemplate('gallery', GalleryPagePreview);
CMS.registerPreviewTemplate('media', MediaPagePreview);
