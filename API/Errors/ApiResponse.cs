using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statuseCode, string message = null)
        {
            StatuseCode = statuseCode;
            Message = message ?? GetDefaultMessageForStatusCode(statuseCode);
        }

        public int StatuseCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statuseCode)
        {
            return statuseCode switch
            {
                400 => "A bad request, you have made",
                401 => "Authorized, you are not",
                404 => "Resource found, it was not",
                500 => "Errors are the path to the dark side. Errors lead to anger. Anger leads to hate. Hate leads to career change",
                _ => null
            };
        }
    }
}