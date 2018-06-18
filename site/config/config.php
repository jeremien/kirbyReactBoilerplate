<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');
// c::set('home', 'rest');
/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

// css 
// c::set('css.handler', function($href, $media = null) {

// });

// optimise images on upload
kirby()->hook(['panel.file.upload', 'panel.file.replace'], function($file) {

// set a max. dimension
  $maxDimension = 1000;
  try {
    // check file type and dimensions
    if ($file->type() == 'image' and ($file->width() > $maxDimension or $file->height() > $maxDimension)) {

      // get the original file path
      $originalPath = $file->dir() . '/' . $file->filename();
      // create a thumb and get its path
      $resizedImage = $file->resize($maxDimension, $maxDimension);
      $resizedPath = $resizedImage->dir() . '/' . $resizedImage->filename();
      // replace the original image with the resized one
      copy($resizedPath, $originalPath);
      unlink($resizedPath);
      }
  } catch (Exception $e) {
      return response::error($e->getMessage());
  }

});