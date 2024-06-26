#' @docType class
#' @title ImageAspectRatio
#' @description ImageAspectRatio Class
#' @format An \code{R6Class} generator object
#' @importFrom R6 R6Class
#' @importFrom jsonlite fromJSON toJSON
#' @export
ImageAspectRatio <- R6::R6Class(
  "ImageAspectRatio",
  public = list(
    #' Initialize a new ImageAspectRatio class.
    #'
    #' @description
    #' Initialize a new ImageAspectRatio class.
    #'
    #' @param ... Optional arguments.
    #' @export
    initialize = function(...) {
      local.optional.var <- list(...)
      val <- unlist(local.optional.var)
      enumvec <- .parse_ImageAspectRatio()

      stopifnot(length(val) == 1L)

      if (!val %in% enumvec)
          stop("Use one of the valid values: ",
              paste0(enumvec, collapse = ", "))
      private$value <- val
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ImageAspectRatio in JSON format
    #' @export
    toJSON = function() {
        jsonlite::toJSON(private$value, auto_unbox = TRUE)
    },
    #' Deserialize JSON string into an instance of ImageAspectRatio
    #'
    #' @description
    #' Deserialize JSON string into an instance of ImageAspectRatio
    #'
    #' @param input_json the JSON input
    #' @return the instance of ImageAspectRatio
    #' @export
    fromJSON = function(input_json) {
      private$value <- jsonlite::fromJSON(input_json,
          simplifyVector = FALSE)
      self
    },
    #' To JSON string
    #'
    #' @description
    #' To JSON String
    #'
    #' @return ImageAspectRatio in JSON format
    #' @export
    toJSONString = function() {
      as.character(jsonlite::toJSON(private$value,
          auto_unbox = TRUE))
    },
    #' Deserialize JSON string into an instance of ImageAspectRatio
    #'
    #' @description
    #' Deserialize JSON string into an instance of ImageAspectRatio
    #'
    #' @param input_json the JSON input
    #' @return the instance of ImageAspectRatio
    #' @export
    fromJSONString = function(input_json) {
      private$value <- jsonlite::fromJSON(input_json,
          simplifyVector = FALSE)
      self
    }
  ),
  private = list(
    value = NULL
  )
)

# add to utils.R
.parse_ImageAspectRatio <- function(vals) {
  res <- gsub("^\\[|\\]$", "", "[original, 16_9, 1_1, 3_2, 2_3]")
  unlist(strsplit(res, ", "))
}

