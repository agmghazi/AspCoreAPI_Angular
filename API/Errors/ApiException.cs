namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statuseCode, string message = null,
        string details = null) : base(statuseCode, message)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}