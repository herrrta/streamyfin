/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import MediaTypes from "../../constants/MediaTypes";

/**
 * Device profile for Native video player
 */
export default {
  Name: "1. Vlc Player",
  MaxStaticBitrate: 999_999_999,
  MaxStreamingBitrate: 999_999_999,
  CodecProfiles: [
    {
      Type: MediaTypes.Video,
      Codec: "h264,h265,hevc,mpeg4,divx,xvid,wmv,vc1,vp8,vp9,av1",
    },
    {
      Type: MediaTypes.Audio,
      Codec: "aac,ac3,eac3,mp3,flac,alac,opus,vorbis,pcm,wma",
    },
  ],
  DirectPlayProfiles: [
    {
      Type: MediaTypes.Video,
      Container: "mp4,mkv,avi,mov,flv,ts,m2ts,webm,ogv,3gp,hls",
      VideoCodec:
        "h264,hevc,mpeg4,divx,xvid,wmv,vc1,vp8,vp9,av1,avi,mpeg,mpeg2video",
      AudioCodec: "aac,ac3,eac3,mp3,flac,alac,opus,vorbis,wma",
    },
    {
      Type: MediaTypes.Audio,
      Container: "mp3,aac,flac,alac,wav,ogg,wma",
      AudioCodec:
        "mp3,aac,flac,alac,opus,vorbis,wma,pcm,mpa,wav,ogg,oga,webma,ape",
    },
  ],
  TranscodingProfiles: [
    {
      Type: MediaTypes.Video,
      Context: "Streaming",
      Protocol: "hls",
      Container: "ts",
      VideoCodec: "h264, hevc",
      AudioCodec: "aac,mp3,ac3",
      CopyTimestamps: false,
      EnableSubtitlesInManifest: true,
    },
    {
      Type: MediaTypes.Audio,
      Context: "Streaming",
      Protocol: "http",
      Container: "mp3",
      AudioCodec: "mp3",
      MaxAudioChannels: "2",
    },
  ],
  SubtitleProfiles: [
    // Official foramts
    { Format: "vtt", Method: "Embed" },
    { Format: "vtt", Method: "Hls" },
    { Format: "vtt", Method: "External" },
    { Format: "vtt", Method: "Encode" },

    { Format: "webvtt", Method: "Embed" },
    { Format: "webvtt", Method: "Hls" },
    { Format: "webvtt", Method: "External" },
    { Format: "webvtt", Method: "Encode" },

    { Format: "srt", Method: "Embed" },
    { Format: "srt", Method: "Hls" },
    { Format: "srt", Method: "External" },
    { Format: "srt", Method: "Encode" },

    { Format: "subrip", Method: "Embed" },
    { Format: "subrip", Method: "Hls" },
    { Format: "subrip", Method: "External" },
    { Format: "subrip", Method: "Encode" },

    { Format: "ttml", Method: "Embed" },
    { Format: "ttml", Method: "Hls" },
    { Format: "ttml", Method: "External" },
    { Format: "ttml", Method: "Encode" },

    { Format: "dvbsub", Method: "Embed" },
    { Format: "dvbsub", Method: "Hls" },
    { Format: "dvbsub", Method: "External" },
    { Format: "dvdsub", Method: "Encode" },

    { Format: "ass", Method: "Embed" },
    { Format: "ass", Method: "Hls" },
    { Format: "ass", Method: "External" },
    { Format: "ass", Method: "Encode" },

    { Format: "idx", Method: "Embed" },
    { Format: "idx", Method: "Hls" },
    { Format: "idx", Method: "External" },
    { Format: "idx", Method: "Encode" },

    { Format: "pgs", Method: "Embed" },
    { Format: "pgs", Method: "Hls" },
    { Format: "pgs", Method: "External" },
    { Format: "pgs", Method: "Encode" },

    { Format: "pgssub", Method: "Embed" },
    { Format: "pgssub", Method: "Hls" },
    { Format: "pgssub", Method: "External" },
    { Format: "pgssub", Method: "Encode" },

    { Format: "ssa", Method: "Embed" },
    { Format: "ssa", Method: "Hls" },
    { Format: "ssa", Method: "External" },
    { Format: "ssa", Method: "Encode" },

    // Other formats
    { Format: "microdvd", Method: "Embed" },
    { Format: "microdvd", Method: "Hls" },
    { Format: "microdvd", Method: "External" },
    { Format: "microdvd", Method: "Encode" },

    { Format: "mov_text", Method: "Embed" },
    { Format: "mov_text", Method: "Hls" },
    { Format: "mov_text", Method: "External" },
    { Format: "mov_text", Method: "Encode" },

    { Format: "mpl2", Method: "Embed" },
    { Format: "mpl2", Method: "Hls" },
    { Format: "mpl2", Method: "External" },
    { Format: "mpl2", Method: "Encode" },

    { Format: "pjs", Method: "Embed" },
    { Format: "pjs", Method: "Hls" },
    { Format: "pjs", Method: "External" },
    { Format: "pjs", Method: "Encode" },

    { Format: "realtext", Method: "Embed" },
    { Format: "realtext", Method: "Hls" },
    { Format: "realtext", Method: "External" },
    { Format: "realtext", Method: "Encode" },

    { Format: "scc", Method: "Embed" },
    { Format: "scc", Method: "Hls" },
    { Format: "scc", Method: "External" },
    { Format: "scc", Method: "Encode" },

    { Format: "smi", Method: "Embed" },
    { Format: "smi", Method: "Hls" },
    { Format: "smi", Method: "External" },
    { Format: "smi", Method: "Encode" },

    { Format: "stl", Method: "Embed" },
    { Format: "stl", Method: "Hls" },
    { Format: "stl", Method: "External" },
    { Format: "stl", Method: "Encode" },

    { Format: "sub", Method: "Embed" },
    { Format: "sub", Method: "Hls" },
    { Format: "sub", Method: "External" },
    { Format: "sub", Method: "Encode" },

    { Format: "subviewer", Method: "Embed" },
    { Format: "subviewer", Method: "Hls" },
    { Format: "subviewer", Method: "External" },
    { Format: "subviewer", Method: "Encode" },

    { Format: "teletext", Method: "Embed" },
    { Format: "teletext", Method: "Hls" },
    { Format: "teletext", Method: "External" },
    { Format: "teletext", Method: "Encode" },

    { Format: "text", Method: "Embed" },
    { Format: "text", Method: "Hls" },
    { Format: "text", Method: "External" },
    { Format: "text", Method: "Encode" },

    { Format: "vplayer", Method: "Embed" },
    { Format: "vplayer", Method: "Hls" },
    { Format: "vplayer", Method: "External" },
    { Format: "vplayer", Method: "Encode" },

    { Format: "xsub", Method: "Embed" },
    { Format: "xsub", Method: "Hls" },
    { Format: "xsub", Method: "External" },
    { Format: "xsub", Method: "Encode" },
  ],
};
