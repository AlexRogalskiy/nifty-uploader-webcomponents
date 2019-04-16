/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  NiftyUploader,
} from '@nifty-uploader/core';
import {
  NiftyFile,
} from '@nifty-uploader/core/lib/types/NiftyFile';
import {
  Units,
} from './utils/Units';
import {
  INiftyOptionsParameter,
} from '@nifty-uploader/core/lib/types/NiftyOptions';
import {
  StatusText,
} from './components/status/StatusText';


export namespace Components {

  interface NiftyAddButton {
    'multiple': boolean;
    /**
    * The uploader
    */
    'uploader': NiftyUploader;
  }
  interface NiftyAddButtonAttributes extends StencilHTMLAttributes {
    'multiple'?: boolean;
    /**
    * The uploader
    */
    'uploader'?: NiftyUploader;
  }

  interface NiftyCancelButton {
    'file': NiftyFile;
  }
  interface NiftyCancelButtonAttributes extends StencilHTMLAttributes {
    'file'?: NiftyFile;
  }

  interface NiftyDropZone {
    'uploader': NiftyUploader;
  }
  interface NiftyDropZoneAttributes extends StencilHTMLAttributes {
    'uploader'?: NiftyUploader;
  }

  interface NiftyFilename {
    'fileName': string;
  }
  interface NiftyFilenameAttributes extends StencilHTMLAttributes {
    'fileName'?: string;
  }

  interface NiftyFilesizeLimit {
    'units': Units;
    'uploader': NiftyUploader;
  }
  interface NiftyFilesizeLimitAttributes extends StencilHTMLAttributes {
    'units'?: Units;
    'uploader'?: NiftyUploader;
  }

  interface NiftyFilesize {
    'fileSize': number;
    'units': Units;
  }
  interface NiftyFilesizeAttributes extends StencilHTMLAttributes {
    'fileSize'?: number;
    'units'?: Units;
  }

  interface NiftyGallery {
    'options': INiftyOptionsParameter;
    'uploader': NiftyUploader;
  }
  interface NiftyGalleryAttributes extends StencilHTMLAttributes {
    'options'?: INiftyOptionsParameter;
    'uploader'?: NiftyUploader;
  }

  interface NiftyProgressBar {
    'file': NiftyFile;
    'hideBeforeStart': boolean;
    'hideOnComplete': boolean;
    'uploader': NiftyUploader;
  }
  interface NiftyProgressBarAttributes extends StencilHTMLAttributes {
    'file'?: NiftyFile;
    'hideBeforeStart'?: boolean;
    'hideOnComplete'?: boolean;
    'uploader'?: NiftyUploader;
  }

  interface NiftyStatus {
    'file': NiftyFile;
    'statusText': StatusText;
  }
  interface NiftyStatusAttributes extends StencilHTMLAttributes {
    'file'?: NiftyFile;
    'statusText'?: StatusText;
  }

  interface NiftyThumbnail {
    'file': NiftyFile;
    'options': { width?: number, height?: number, maxWidth?: number, maxHeight?: number, timeout?: number };
    'thumbnailUrl': string;
  }
  interface NiftyThumbnailAttributes extends StencilHTMLAttributes {
    'file'?: NiftyFile;
    'onThumbnailGenerated'?: (event: CustomEvent) => void;
    'options'?: { width?: number, height?: number, maxWidth?: number, maxHeight?: number, timeout?: number };
    'thumbnailUrl'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'NiftyAddButton': Components.NiftyAddButton;
    'NiftyCancelButton': Components.NiftyCancelButton;
    'NiftyDropZone': Components.NiftyDropZone;
    'NiftyFilename': Components.NiftyFilename;
    'NiftyFilesizeLimit': Components.NiftyFilesizeLimit;
    'NiftyFilesize': Components.NiftyFilesize;
    'NiftyGallery': Components.NiftyGallery;
    'NiftyProgressBar': Components.NiftyProgressBar;
    'NiftyStatus': Components.NiftyStatus;
    'NiftyThumbnail': Components.NiftyThumbnail;
  }

  interface StencilIntrinsicElements {
    'nifty-add-button': Components.NiftyAddButtonAttributes;
    'nifty-cancel-button': Components.NiftyCancelButtonAttributes;
    'nifty-drop-zone': Components.NiftyDropZoneAttributes;
    'nifty-filename': Components.NiftyFilenameAttributes;
    'nifty-filesize-limit': Components.NiftyFilesizeLimitAttributes;
    'nifty-filesize': Components.NiftyFilesizeAttributes;
    'nifty-gallery': Components.NiftyGalleryAttributes;
    'nifty-progress-bar': Components.NiftyProgressBarAttributes;
    'nifty-status': Components.NiftyStatusAttributes;
    'nifty-thumbnail': Components.NiftyThumbnailAttributes;
  }


  interface HTMLNiftyAddButtonElement extends Components.NiftyAddButton, HTMLStencilElement {}
  var HTMLNiftyAddButtonElement: {
    prototype: HTMLNiftyAddButtonElement;
    new (): HTMLNiftyAddButtonElement;
  };

  interface HTMLNiftyCancelButtonElement extends Components.NiftyCancelButton, HTMLStencilElement {}
  var HTMLNiftyCancelButtonElement: {
    prototype: HTMLNiftyCancelButtonElement;
    new (): HTMLNiftyCancelButtonElement;
  };

  interface HTMLNiftyDropZoneElement extends Components.NiftyDropZone, HTMLStencilElement {}
  var HTMLNiftyDropZoneElement: {
    prototype: HTMLNiftyDropZoneElement;
    new (): HTMLNiftyDropZoneElement;
  };

  interface HTMLNiftyFilenameElement extends Components.NiftyFilename, HTMLStencilElement {}
  var HTMLNiftyFilenameElement: {
    prototype: HTMLNiftyFilenameElement;
    new (): HTMLNiftyFilenameElement;
  };

  interface HTMLNiftyFilesizeLimitElement extends Components.NiftyFilesizeLimit, HTMLStencilElement {}
  var HTMLNiftyFilesizeLimitElement: {
    prototype: HTMLNiftyFilesizeLimitElement;
    new (): HTMLNiftyFilesizeLimitElement;
  };

  interface HTMLNiftyFilesizeElement extends Components.NiftyFilesize, HTMLStencilElement {}
  var HTMLNiftyFilesizeElement: {
    prototype: HTMLNiftyFilesizeElement;
    new (): HTMLNiftyFilesizeElement;
  };

  interface HTMLNiftyGalleryElement extends Components.NiftyGallery, HTMLStencilElement {}
  var HTMLNiftyGalleryElement: {
    prototype: HTMLNiftyGalleryElement;
    new (): HTMLNiftyGalleryElement;
  };

  interface HTMLNiftyProgressBarElement extends Components.NiftyProgressBar, HTMLStencilElement {}
  var HTMLNiftyProgressBarElement: {
    prototype: HTMLNiftyProgressBarElement;
    new (): HTMLNiftyProgressBarElement;
  };

  interface HTMLNiftyStatusElement extends Components.NiftyStatus, HTMLStencilElement {}
  var HTMLNiftyStatusElement: {
    prototype: HTMLNiftyStatusElement;
    new (): HTMLNiftyStatusElement;
  };

  interface HTMLNiftyThumbnailElement extends Components.NiftyThumbnail, HTMLStencilElement {}
  var HTMLNiftyThumbnailElement: {
    prototype: HTMLNiftyThumbnailElement;
    new (): HTMLNiftyThumbnailElement;
  };

  interface HTMLElementTagNameMap {
    'nifty-add-button': HTMLNiftyAddButtonElement
    'nifty-cancel-button': HTMLNiftyCancelButtonElement
    'nifty-drop-zone': HTMLNiftyDropZoneElement
    'nifty-filename': HTMLNiftyFilenameElement
    'nifty-filesize-limit': HTMLNiftyFilesizeLimitElement
    'nifty-filesize': HTMLNiftyFilesizeElement
    'nifty-gallery': HTMLNiftyGalleryElement
    'nifty-progress-bar': HTMLNiftyProgressBarElement
    'nifty-status': HTMLNiftyStatusElement
    'nifty-thumbnail': HTMLNiftyThumbnailElement
  }

  interface ElementTagNameMap {
    'nifty-add-button': HTMLNiftyAddButtonElement;
    'nifty-cancel-button': HTMLNiftyCancelButtonElement;
    'nifty-drop-zone': HTMLNiftyDropZoneElement;
    'nifty-filename': HTMLNiftyFilenameElement;
    'nifty-filesize-limit': HTMLNiftyFilesizeLimitElement;
    'nifty-filesize': HTMLNiftyFilesizeElement;
    'nifty-gallery': HTMLNiftyGalleryElement;
    'nifty-progress-bar': HTMLNiftyProgressBarElement;
    'nifty-status': HTMLNiftyStatusElement;
    'nifty-thumbnail': HTMLNiftyThumbnailElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
